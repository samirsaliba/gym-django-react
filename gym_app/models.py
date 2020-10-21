from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver


class Cliente(models.Model):
    # Classe de cliente, tem um relacionamento 1pra1 com usuario 
    # para adicionar mais campos mantendo o sistema de login do django
    # ref https://docs.djangoproject.com/en/3.1/topics/auth/customizing/#extending-user
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    CPF = models.CharField(max_length=11,unique=True, validators=[
        RegexValidator(
            regex='^[0-9]{11}$',
            message='CPF deve conter 11 digitos, apenas números',
            code='invalid_cpf'
        ),
    ])
    RG = models.CharField(max_length=10, unique=True)
    data_de_nascimento = models.DateField()
    num_cartao_credito = models.CharField(max_length=16, validators=[
        RegexValidator(
            regex='^[0-9]{16}$',
            message='Cartao de credito deve conter 16 digitos, apenas números',
            code='invalid_cartao_credito'
        ),
    ])
    bandeira_cartao_credito = models.CharField(max_length=16)
    nome_completo_cartao_credito = models.CharField(max_length=50)
    habilitado = models.BooleanField(default=False)

    def __str__(self):
        return self.CPF

class Modalidade(models.Model):
    tipo = models.CharField(max_length=20, primary_key=True)

    def clean(self):
        self.tipo = self.tipo.capitalize()
    
    def __str__(self):
        return self.tipo

class Turma(models.Model):
    
    class Dias(models.TextChoices):
        SEGUNDA = 'SEG', _('Segunda')
        TERCA = 'TER', _('Terça')
        QUARTA = 'QUA', _('Quarta')
        QUINTA = 'QUI', _('Quinta')
        SEXTA = 'SEX', _('Sexta')
        SABADO = 'SAB', _('Sábado')
        DOMINGO = 'DOM', _('Domingo')


    modalidade = models.ForeignKey(Modalidade, on_delete=models.CASCADE)
    dia = models.CharField(max_length=3, choices=Dias.choices,default=Dias.SEGUNDA)
    horario = models.CharField(max_length=5, validators=[
        RegexValidator(
            regex='^[0-2][0-9]:[0-5][0|5]$',
            message='Horario no formato HH:MM, minutos multiplos de 5',
            code='invalid_horario'
        ),
    ])
    vagas = models.PositiveSmallIntegerField()
    
    class Meta:
        unique_together = [['modalidade', 'horario', 'dia']]

    def __str__(self):
        return "{}, {} às {}".format(self.modalidade, self.dia, self.horario)

class Plano(models.Model):

    class Planos(models.TextChoices):
        MENSAL = 'MES', _('Mensal')
        SEMESTRAL = 'SEM', _('Semestral')
        ANUAL = 'ANO', _('Anual')
    
    class VezesPorSemana(models.IntegerChoices):
        DUAS = 2
        TRES = 3
        SETE = 7
    
    modalidade = models.ForeignKey(Modalidade, on_delete=models.CASCADE)
    vezes_por_semana = models.IntegerField(choices=VezesPorSemana.choices)
    tipo = models.CharField(max_length=3, choices=Planos.choices,default=Planos.MENSAL)
    valor = models.DecimalField(max_digits=6, decimal_places=2)
    
    class Meta:
        unique_together = [['vezes_por_semana','valor', 'modalidade']]

    def __str__(self):
        return "{} {}x/semana, {}, R${}".format(self.modalidade, self.vezes_por_semana, self.tipo, self.valor)

class MatriculaPlano(models.Model):
    
    cliente = models.ForeignKey(Cliente, related_name="planos", on_delete=models.CASCADE)
    plano = models.ForeignKey(Plano, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = [['plano','cliente']]

    def __str__(self):
        return "Cliente: {}, Plano: {}".format(self.cliente, self.plano)



class MatriculaTurma(models.Model):
    turma = models.ForeignKey(Turma, related_name="turmas", on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

    class Meta:
        unique_together = [['turma','cliente']]

    def __str__(self):
        return "Cliente:{}, Turma: {}".format(self.cliente, self.turma)


class Exame(models.Model):
    cliente = models.ForeignKey(Cliente, related_name="exames", on_delete=models.CASCADE)
    massa = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.DecimalField(max_digits=3, decimal_places=2)
    pressao_sistolica = models.PositiveSmallIntegerField(validators=[MinValueValidator(0),MaxValueValidator(200)])
    pressao_diastolica = models.PositiveSmallIntegerField(validators=[MinValueValidator(0),MaxValueValidator(200)])
    percentual_gordura = models.DecimalField(max_digits=4, decimal_places=2)
    percentual_massa_magra = models.DecimalField(max_digits=4, decimal_places=2)
    imc = models.DecimalField(max_digits=3, decimal_places=1)
    habilitado = models.BooleanField()
    data = models.DateField(auto_now_add=True)

    def __str__(self):
        return "Exame do cliente: {}, Habilitado: {}, {}".format(self.cliente, self.habilitado, self.data)

# Apos (ou antes) criacao de um modelo, manda um sinal para esta funcao executar algum codigo
# Ref https://dev.to/coderasha/create-advanced-user-sign-up-view-in-django-step-by-step-k9m
# Nesta funcao, assim que um exame for cadastrado, se o resultado for positivo (habilitado)
# Habilita-se o cliente no campo 'habilitado' da classe Cliente
@receiver(post_save, sender=Exame)
def update_profile_signal(sender, instance, created, **kwargs):
    if created:
        instance.cliente.habilitado = instance.habilitado
        instance.cliente.save()
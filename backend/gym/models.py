from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator
from django.utils.translation import gettext_lazy as _

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

class Modalidade(models.Model):
    tipo = models.CharField(max_length=20, primary_key=True)

    def clean(self):
        self.tipo = self.tipo.capitalize()

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



class MatriculaPlano(models.Model):
    
    class Planos(models.TextChoices):
        MENSAL = 'MES', _('Mensal')
        SEMESTRAL = 'SEM', _('Semestral')
        ANUAL = 'ANO', _('Anual')

    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    plano = models.CharField(max_length=3, choices=Planos.choices,default=Planos.MENSAL)
    
    class Meta:
        unique_together = [['plano','cliente']]

class Plano(models.Model):
    
    class VezesPorSemana(models.TextChoices):
        DUAS = 2
        TRES = 3
        SETE = 7
    
    vezes_por_semana = models.IntegerField(choices=VezesPorSemana.choices)
    valor = models.PositiveSmallIntegerField()
    modalidade = models.ForeignKey(Modalidade, on_delete=models.CASCADE)

    class Meta:
        unique_together = [['vezes_por_semana','valor', 'modalidade']]



class MatriculaTurma(models.Model):
    turma = models.ForeignKey(Turma, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

    class Meta:
        unique_together = [['turma','cliente']]




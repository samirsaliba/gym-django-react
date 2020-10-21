from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from django.utils.translation import ugettext, ugettext_lazy as _

# Trecho abaixo para impedir que Staff (secretaria, recepcao) criem Superusers do sistema
# Referencia https://stackoverflow.com/questions/16102222/djangoremove-superuser-checkbox-from-django-admin-panel-when-login-staff-users
class MyUserAdmin(UserAdmin):
    def get_fieldsets(self, request, obj=None):
        if not obj:
            return self.add_fieldsets

        if request.user.is_superuser:
            perm_fields = ('is_active', 'is_staff', 'is_superuser',
                           'groups', 'user_permissions')
        else:
            # modify these to suit the fields you want your
            # staff user to be able to edit
            perm_fields = ('is_active', 'is_staff')

        return [(None, {'fields': ('username', 'password')}),
                (_('Personal info'), {'fields': ('first_name', 'last_name', 'email')}),
                (_('Permissions'), {'fields': perm_fields}),
                (_('Important dates'), {'fields': ('last_login', 'date_joined')})]

admin.site.unregister(User)
admin.site.register(User, MyUserAdmin)


# Register your models here.
from .models import (
    Cliente, Modalidade, Turma, Plano, MatriculaPlano,
    MatriculaTurma, Exame, Treino
)


# As classes abaixo limitam as opcoes de cliente na hora de instanciar uma matricula
# So exibe clientes ja 'habilitados' por um medico
class MatriculaTurmaAdmin(admin.ModelAdmin):
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "cliente":
            kwargs["queryset"] = Cliente.objects.filter(habilitado=True)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

class MatriculaTurmaAdmin(admin.ModelAdmin):
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "cliente":
            kwargs["queryset"] = Cliente.objects.filter(habilitado=True)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

class TreinoAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'data', 'professor')
    fieldsets = [
        (None, { 'fields': [('cliente','segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo')] } ),
    ]

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "cliente":
            kwargs["queryset"] = Cliente.objects.filter(habilitado=True)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
        
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'professor', None) is None:
            obj.professor = request.user
        obj.save()

admin.site.register(Treino,TreinoAdmin)
admin.site.register(MatriculaTurma,MatriculaTurmaAdmin)
admin.site.register(MatriculaPlano,MatriculaTurmaAdmin)
admin.site.register(Cliente)
admin.site.register(Modalidade)
admin.site.register(Turma)
admin.site.register(Plano)
admin.site.register(Exame)
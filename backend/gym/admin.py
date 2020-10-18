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
    MatriculaTurma, Exame
)

admin.site.register(Cliente)
admin.site.register(Modalidade)
admin.site.register(Turma)
admin.site.register(Plano)
admin.site.register(MatriculaPlano)
admin.site.register(MatriculaTurma)
admin.site.register(Exame)
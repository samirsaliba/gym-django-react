# Generated by Django 3.1.2 on 2020-10-18 18:08

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0004_auto_20201018_1751'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exame',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('massa', models.DecimalField(decimal_places=2, max_digits=5)),
                ('altura', models.DecimalField(decimal_places=2, max_digits=3)),
                ('pressao_sistolica', models.PositiveSmallIntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(200)])),
                ('pressao_diastolica', models.PositiveSmallIntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(200)])),
                ('percentual_gordura', models.DecimalField(decimal_places=2, max_digits=4)),
                ('percentual_massa_magra', models.DecimalField(decimal_places=2, max_digits=4)),
                ('imc', models.DecimalField(decimal_places=1, max_digits=3)),
                ('habilitado', models.BooleanField()),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gym.cliente')),
            ],
        ),
    ]

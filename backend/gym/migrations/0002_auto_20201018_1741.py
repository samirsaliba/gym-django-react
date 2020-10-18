# Generated by Django 3.1.2 on 2020-10-18 17:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='plano',
            name='tipo',
            field=models.CharField(choices=[('MES', 'Mensal'), ('SEM', 'Semestral'), ('ANO', 'Anual')], default='MES', max_length=3),
        ),
        migrations.AlterField(
            model_name='matriculaplano',
            name='plano',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gym.plano'),
        ),
    ]

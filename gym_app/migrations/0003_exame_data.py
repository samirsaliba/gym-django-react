# Generated by Django 3.1.2 on 2020-10-21 00:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('gym_app', '0002_auto_20201020_1613'),
    ]

    operations = [
        migrations.AddField(
            model_name='exame',
            name='data',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]

# Generated by Django 3.1.2 on 2020-10-18 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0002_auto_20201018_1741'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plano',
            name='valor',
            field=models.DecimalField(decimal_places=2, max_digits=6),
        ),
    ]

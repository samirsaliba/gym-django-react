# Generated by Django 3.1.2 on 2020-10-27 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym_app', '0003_treino'),
    ]

    operations = [
        migrations.AddField(
            model_name='modalidade',
            name='imagem',
            field=models.ImageField(default='default.jpg', upload_to='images/'),
        ),
    ]
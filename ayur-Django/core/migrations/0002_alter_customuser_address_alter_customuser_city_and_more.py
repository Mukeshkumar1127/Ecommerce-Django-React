# Generated by Django 5.1 on 2024-12-15 02:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='address',
            field=models.TextField(blank=True, default='3, Cole Street, Ajah, Lagos', null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='city',
            field=models.CharField(blank=True, default='Lagos', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='phone',
            field=models.CharField(blank=True, default='012345678', max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='state',
            field=models.CharField(blank=True, default='Lagos', max_length=100, null=True),
        ),
    ]

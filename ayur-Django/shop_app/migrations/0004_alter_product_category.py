# Generated by Django 5.1.5 on 2025-04-11 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_app', '0003_transaction'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(blank=True, choices=[('Electronics', 'ELECTRONICS'), ('Groceries', 'GROCERIES'), ('SkinCare', 'SKINCARE'), ('Medicines', 'MEDICINES')], max_length=15, null=True),
        ),
    ]

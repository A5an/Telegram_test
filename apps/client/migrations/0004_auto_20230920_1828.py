# Generated by Django 3.1.7 on 2023-09-20 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0003_auto_20230920_1825'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lobby',
            name='arrivalLoc',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='lobby',
            name='arrivalTime',
            field=models.TimeField(null=True),
        ),
        migrations.AlterField(
            model_name='lobby',
            name='availableSeats',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='lobby',
            name='currentLoc',
            field=models.CharField(max_length=300, null=True),
        ),
    ]
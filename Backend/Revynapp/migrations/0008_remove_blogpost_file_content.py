# Generated by Django 5.0.6 on 2024-10-15 16:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Revynapp', '0007_blogpost_file_content'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogpost',
            name='file_content',
        ),
    ]

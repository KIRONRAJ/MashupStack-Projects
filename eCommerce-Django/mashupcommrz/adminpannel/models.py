from django.db import models

# Create your models here.
class Products(models.Model):
    product_name = models.CharField(max_length=200)
    price = models.FloatField()
    product_description = models.CharField(max_length=1000)
    product_picture = models.FileField()
    is_active = models.SmallIntegerField(default=1)

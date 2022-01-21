from django.db import models
from adminpannel.models import Products
from django.contrib.auth.models import User
from datetime import date


# Create your models here.
class CustomerCart(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    product = models.ForeignKey(Products, on_delete=models.CASCADE, null=False, blank=False)
    addedon = models.DateTimeField(auto_now_add=True)
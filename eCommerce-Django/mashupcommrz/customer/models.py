from django.db import models
from adminpannel.models import Products
from django.contrib.auth.models import User
from datetime import date


# Create your models here.
class CustomerCart(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    product = models.ForeignKey(Products, on_delete=models.CASCADE, null=False, blank=False)
    addedon = models.DateTimeField(auto_now_add=True)

class CustomerCheckout(models.Model):
    customer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=False)
    order_id = models.CharField(max_length=200)
    payment_id = models.CharField(max_length=200,null=True,default = None)
    total_amount = models.FloatField()
    payment_signature = models.CharField(max_length=200,null=True,default = None)
    reciept_num = models.CharField(max_length=200)
    delivery_address =  models.CharField(max_length=2000)
    delivery_phone =  models.CharField(max_length=20)
    payment_complete = models.IntegerField(default = 0)
    payedon = models.DateTimeField(auto_now_add=True)

class customerPayedProducts(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    product_name = models.CharField(max_length=200)
    price = models.FloatField()
    product_description = models.CharField(max_length=1000)
    checkout_details = models.ForeignKey(CustomerCheckout, on_delete=models.CASCADE, null=False, blank=False)
from django.urls import path
from django.views.generic.base import RedirectView
from . import views

urlpatterns = [
    path("registercustomer", views.registercustomer, name="registercustomer"),
    path("logout", views.logoutcustomer, name="logoutcustomer"),
    path("logincustomer", views.logincustomer, name="logincustomer"),
    path("products", views.homepage, name="products"),
    path("addtocart", views.addproducttocart, name="addtocart"),
    path("removefromcart", views.removeproductfromcart, name="removefromcart"),
]



from django.urls import path
from django.views.generic.base import RedirectView
from . import views

urlpatterns = [
    path("login", views.loginadmin, name="login"),
    path("", RedirectView.as_view(url="login")),
    path("adminlogout", views.logoutadmin, name="adminlogout"),
    path("dashboard", views.admindashboard, name="admindashboard"),
    path("manage-products", views.manageproducts, name="manageproducts"),
    path("add-product", views.addproduct, name="addproduct"),
    path('change-product-status', views.changestatus, name='changestatus'),
    path('edit-product/<int:product_id>', views.editproduct, name='editproduct'),
    path('delete-product/<int:product_id>', views.deleteproduct, name='deleteproduct'),

]

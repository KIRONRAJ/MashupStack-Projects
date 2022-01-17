from django.urls import path
from django.views.generic.base import RedirectView
from . import views

urlpatterns = [
    path("login", views.loginadmin, name="login"),
    path("", RedirectView.as_view(url="login")),
    path("adminlogout", views.logoutadmin, name="adminlogout"),
    path("dashboard", views.admindashboard, name="admindashboard"),
]


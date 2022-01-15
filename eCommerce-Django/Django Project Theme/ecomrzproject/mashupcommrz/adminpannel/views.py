from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.urls.base import reverse_lazy
from forms import LoginForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.urls import reverse

from django.contrib.auth.decorators import user_passes_test


def checksuperuser(user):
    return user.is_superuser


@user_passes_test(checksuperuser, login_url=reverse_lazy("login"))
def admindashboard(request):
    return render(request, "adminpannel/admindashboard.html", {})


def loginadmin(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse("admindashboard"))
    else:
        if request.method == "POST":
            login_form = LoginForm(request.POST)
            if login_form.is_valid():
                username = login_form.cleaned_data["username"]
                password = login_form.cleaned_data["password"]

                user = authenticate(username=username, password=password)

                if user is not None:
                    if user.is_active and user.is_superuser:
                        login(request, user)
                        return HttpResponseRedirect(reverse("admindashboard"))
                    else:
                        return HttpResponse("Your account is not active")
                else:
                    return HttpResponse("The Account does not exists")
            else:
                login_form = LoginForm()
                return render(request, "adminpannel/login.html", {"form": login_form})
        else:
            login_form = LoginForm()
        return render(request, "adminpannel/login.html", {"form": login_form})


@user_passes_test(checksuperuser, login_url=reverse_lazy("login"))
def logoutadmin(request):
    logout(request)
    return HttpResponseRedirect(reverse("login"))

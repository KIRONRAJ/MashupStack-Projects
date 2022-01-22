from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse, reverse_lazy
from .forms import RegistrationForm
from django.contrib.auth.models import User
from adminpannel.forms import LoginForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from adminpannel.models import Products
from django.views.decorators.csrf import csrf_exempt
from .models import CustomerCart




def registercustomer(request):
    if request.method == "POST":
        registerform = RegistrationForm(request.POST)
        if registerform.is_valid():
            username = registerform.cleaned_data["username"]
            email = registerform.cleaned_data["emailid"]
            firstname = registerform.cleaned_data["firstname"]
            lastname = registerform.cleaned_data["lastname"]
            password = registerform.cleaned_data["password"]
            if User.objects.filter(username=username).exists():
                registerform = RegistrationForm(request.POST)
                context = {
                    "registerform": registerform,
                    "error": "Username already exists add a new one",
                }
                return render(request, "customer/registercustomer.html", context)
            else:
                user = User.objects.create_user(
                    username=username,
                    email=email,
                    password=password,
                    first_name=firstname,
                    last_name=lastname,
                )
                user.save()
                return HttpResponseRedirect(reverse("logincustomer"))
        else:
            registerform = RegistrationForm(request.POST)
            context = {"registerform": registerform}
            return render(request, "customer/registercustomer.html", context)
    else:
        registerform = RegistrationForm()
    return render(
        request, "customer/registercustomer.html", {"registerform": registerform}
    )


def logincustomer(request):
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
                    if user.is_active:
                        login(request, user)
                        return HttpResponseRedirect(reverse("products"))
                    else:
                        login_form = LoginForm(request.POST)
                        return render(
                            request, "customer/logincustomer.html", {"form": login_form}
                        )
                else:
                    login_form = LoginForm(request.POST)
                    return render(
                        request, "customer/logincustomer.html", {"form": login_form}
                    )
            else:
                login_form = LoginForm(request.POST)
                return render(
                    request, "customer/logincustomer.html", {"form": login_form}
                )
        else:
            login_form = LoginForm()
        return render(request, "customer/logincustomer.html", {"form": login_form})


@login_required(login_url=reverse_lazy("logincustomer"))
def logoutcustomer(request):
    logout(request)
    return HttpResponseRedirect(reverse("products"))


def homepage(request):
    products = Products.objects.filter(is_active=1)
    usercart = [];
    # if request.user.is_authenticated:
    #     usercart = CustomerCart.objects.filter(customer = request.user)
    return render(request,'customer/products.html',{'products':products,'usercart':usercart})

@csrf_exempt
@login_required
def addproducttocart(request):
    if request.is_ajax():
        product_id = int(request.POST['product'])
        user = request.user
        cart_instance = CustomerCart(product_id = product_id,
                                    customer = user)
        cart_instance.save()
        return JsonResponse({'result':'success'})

@csrf_exempt
@login_required
def removeproductfromcart(request):
    if request.is_ajax():
        product_id = int(request.POST['product'])
        user = request.user
        cart_instance = CustomerCart.objects.filter(customer = user,product=product_id)
        cart_instance.delete()
        return JsonResponse({'result':'success'})


from django import forms

class RegistrationForm(forms.Form):
    username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control username','placeholder':'Username'}),required = True)
    firstname = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Firstname'}),required = True)
    lastname = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Lastname'}),required = True)
    emailid = forms.CharField(widget=forms.EmailInput(attrs={'class':'form-control','placeholder':'EmailId'}),required = True)
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control','placeholder':'Password'}),required = True)

class CustomerCheckoutForm(forms.Form):
    phone = forms.CharField(widget = forms.TextInput(attrs={'class':'form-control','placeholder':'Mobile number'}),max_length= 200, required=True)
    address = forms.CharField(widget = forms.Textarea(attrs={'class':'form-control','placeholder':'Delivery address',"rows":5}),max_length= 2000, required=True)
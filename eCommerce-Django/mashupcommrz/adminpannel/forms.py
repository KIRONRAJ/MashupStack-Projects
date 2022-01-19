from django import forms

class LoginForm(forms.Form):
	username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Username'}))
	password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control','placeholder':'Password'}))


class ProductForm(forms.Form):
	product_name = forms.CharField(widget = forms.TextInput(attrs={'class':'form-control','placeholder':'Product Name'}),max_length= 200, required=True)
	product_description = forms.CharField(widget=forms.Textarea(attrs={'class':'form-control','placeholder':'Product description',"rows":5}),max_length= 2000, required=True)
	price = forms.FloatField(widget = forms.NumberInput(attrs={'class':'form-control','placeholder':'Product Price'}),required=True)
	product_image = forms.forms.FileField(widget=forms.FileInput(attrs={'multiple': False,'class':'form-control'}),required=True)

class EditProductForm(forms.Form):
	product_name = forms.CharField(widget = forms.TextInput(attrs={'class':'form-control','placeholder':'Product Name'}),max_length= 200, required=True)
	product_description = forms.CharField(widget = forms.Textarea(attrs={'class':'form-control', 'placeholder':'Product description', "rows":5}),max_length= 2000, required=True)
	price = forms.FloatField(widget = forms.NumberInput(attrs={'class':'form-control','placeholder':'Product Price'}),required=True)
	product_image = forms.forms.FileField(widget=forms.FileInput(attrs={'multiple': False,'class':'form-control'}),required=False)
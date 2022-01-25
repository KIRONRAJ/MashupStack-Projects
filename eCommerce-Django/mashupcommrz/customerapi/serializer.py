from rest_framework import serializers
from customer.models import CustomerCart
from adminpannel.models import Products


class ProductsListSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Products
        fields = '__all__'

    def to_representation(self, obj):
        serialized_data = super(ProductsListSerializer, self).to_representation(obj)
        product_id = serialized_data.get('id')
        if self.context.get("userid"):
            try:
                customercart = CustomerCart.objects.get(product_id=product_id,customer_id=self.context.get("userid"))
                serialized_data['incart'] = 1
            except:
                serialized_data['incart'] = 0
        else:
            serialized_data['incart'] = 0
        return serialized_data

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('__all__')


class CustomerCartSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = CustomerCart
        fields = ('__all__')        
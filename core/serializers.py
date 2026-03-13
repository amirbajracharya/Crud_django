from rest_framework import serializers
from .models import Booking, Car, Customer
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = "__all__"


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = "__all__"   

    def create(self, validated_data):
        car = validated_data['car']
        start = validated_data['start_date']
        end = validated_data['end_date']

        days = (end - start).days
        total = days * car.rent_per_day

        validated_data['total_amount'] = total

        return super().create(validated_data)     
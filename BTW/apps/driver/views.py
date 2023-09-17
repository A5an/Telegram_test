from django.shortcuts import render
from django.http import HttpResponse


def driver(request):
    return render(request,'driver.html')



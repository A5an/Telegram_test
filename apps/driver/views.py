from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from apps.base.views import loginPage
from apps.base.views import logoutUser
from .forms import LobbyForm


def loginPage2(request):
    return loginPage(request)

def logoutUser2(request):
    return logoutUser(request)


@login_required(login_url='login')
def driver(request):
    return render(request,'driver.html')

@login_required(login_url='login')
def create_lobby(request):
    form = LobbyForm()
    if request.method == 'POST':
        form = LobbyForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('driver')
    context = {'form':form}
    return render(request,'lobby_form.html',context)

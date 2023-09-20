from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from apps.base.views import loginPage
from apps.base.views import logoutUser
from . models import Lobby

def loginPage2(request):
    return loginPage(request)

def logoutUser2(request):
    return logoutUser(request)


@login_required(login_url='login')
def client(request):
    lobbies = Lobby.objects.all()
    context ={'lobbies':lobbies}

    
    return render(request,'client/client.html',context)


def lobbi(request,pk):
    lobbi  = Lobby.objects.get(id=pk)
    context = {'lobbi':lobbi}

    return render(request,'client/lobbi.html',context)
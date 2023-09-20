from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from apps.base.views import loginPage
from apps.base.views import logoutUser
from apps.client.models import Lobby

def loginPage2(request):
    return loginPage(request)

def logoutUser2(request):
    return logoutUser(request)


@login_required(login_url='login')
def client(request):
    lobbies = Lobby.objects.all()
    context ={'lobbies':lobbies}
    
    return render(request,'client/client.html',context)


def lobby(request,pk):
    lobby  = Lobby.objects.get(id=pk)
    context = {'lobby':lobby}

    return render(request,'client/lobby.html',context)
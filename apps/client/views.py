from django.shortcuts import render
from . models import Lobby
# Create your views here.



# lobbies = [
#     {'id':1,'name':'Malika Bazar'},
#     {'id':2,'name':'Astana'},
#     {'id':3,'name':'Bitch paket'},
# ]

def client(request):
    lobbies = Lobby.objects.all()
    context ={'lobbies':lobbies}

    
    return render(request,'client/client.html',context)


def lobbi(request,pk):
    lobbi  = Lobby.objects.get(id=pk)
    context = {'lobbi':lobbi}

    return render(request,'client/lobbi.html',context)
from django.forms import ModelForm
from apps.client.models import Lobby

class LobbyForm(ModelForm):
    class Meta:
        model = Lobby
        fields = ['host','availableSeats', 'currentLoc_lat', 'currentLoc_lng', 'arrivalLoc_lat', 'arrivalLoc_lng']
    
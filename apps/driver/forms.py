from django.forms import ModelForm
from apps.client.models import Lobby

class LobbyForm(ModelForm):
    class Meta:
        model = Lobby
        fields = ['host','availableSeats']
    
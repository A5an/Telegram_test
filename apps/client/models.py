from typing import Any
from django.db import models
from django.contrib.auth.models import User



class Lobby(models.Model):
    host = models.ForeignKey(User,on_delete=models.CASCADE)
    created = models.DateTimeField(auto_created=True)
    arrivalTime = models.TimeField()
    availableSeats = models.IntegerField()
    currentLoc = models.CharField(max_length=300)
    arrivalLoc = models.CharField(max_length=300)


    def __str__(self):
        return self.host
        


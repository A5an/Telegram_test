from typing import Any
from django.db import models
from django.contrib.auth.models import User



class Lobby(models.Model):
    host = models.ForeignKey(User,on_delete=models.SET_NULL,null=True,blank=True)
    created = models.DateTimeField(auto_now_add=True)
    arrivalTime = models.TimeField(null=True)
    availableSeats = models.IntegerField(null=True)
    currentLoc = models.CharField(max_length=300, null=True)
    arrivalLoc = models.CharField(max_length=300, null=True)
    currentLoc_lat = models.FloatField(null=True)
    currentLoc_lng = models.FloatField(null=True)
    arrivalLoc_lat = models.FloatField(null=True)
    arrivalLoc_lng = models.FloatField(null=True)


    def __str__(self):
        return str(self.host)

        


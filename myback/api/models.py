from django.db import models

class Nickname(models.Model):
    name = models.CharField(max_length=32)
    def __str__(self):
        return f'{self.name}'

class Wish(models.Model):
    title = models.CharField(max_length=32)
    text = models.TextField(max_length=320)
    nickname = models.ForeignKey(Nickname, related_name='wishes', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}'

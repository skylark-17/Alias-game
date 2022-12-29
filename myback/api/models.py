from django.db import models

class Wish(models.Model):
    title = models.CharField(max_length=32)
    text = models.TextField(max_length=320)
    nickname = models.CharField(max_length=32)

    def __str__(self):
        return f'{self.nickname, self.title}'

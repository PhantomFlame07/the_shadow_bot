import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
import random
from discord import Game


Client = discord.client
client = commands.Bot(command_prefix = '!')
Clientdiscord = discord.Client()


@client.event
async def on_member_join(member):
    print('Recognised that a member called ' + member.name + ' joined')
    await client.send_message(member.channel, 'Welcome to the server, ' + member.name + '. Be sure to read the #rules.')
async def on_ready():
    await client.change_presence(game=Game(name=''))
    print('Ready, Freddy')


@client.event
async def on_message(message):
    if message.content == '$rules':
        await client.send_message(message.channel,'Welcome to the EpicGamer541 Discord Channel. Here, you can keep up with my games and videos. You can see teasers and uploads, post fan art, or just discuss among the topic. But there are a few rules.')
    if message.content == '$rule1':
        await client.send_message(message.channel,'1) Any foul language is prohibited, even censorship')
    if message.content == '$rule2':
        await client.send_message(message.channel,'2) Anything sexual is prohibited, even censorship')
    if message.content == '$rule3':
        await client.send_message(message.channel,'3) This channel is NOT for roleplaying of any kind')
    if message.content == '$rule4':
        await client.send_message(message.channel,'4) No bullying or harrassment to anyone')
    if message.content == '$rule5':
        await client.send_message(message.channel,'5) No spamming')
    if message.content == '$rule6':
        await client.send_message(message.channel,'6) Do NOT tag me multiple times just because I did not answer')
client.login(process.env.NTgwMTg3NzY3NzAzODYzMzAx.XONkTw.7kZ_pQriTUyhxKYPIorwmCdlfi0);

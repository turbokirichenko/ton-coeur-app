from os import getenv

from telebot import types, TeleBot
from urllib.request import urlopen

# data
bot_name = 'toncoeurbot'
bot_link = 't.me/toncoeurbot'
hello_msg = f"Привет это {bot_name}!\n\nСделай валентинку ❤️ просто тапая по экрану!\n\n\n\nHello there!\n\nMake a valentine card ❤️ by simply clicking on the screen!"
how_play_eng = f'How It Works?\n\n🤍 Tap to send – Each tap unlocks a deeper emotion.\n\n🤍 Hearts have meaning – The more you tap, the stronger the message.\n\n🤍 Share with your special one – Your taps create a unique moment between you and someone special'
how_play_ru = f'Как это работает?\n\n🤍 Нажмите, чтобы отправить – на каждом этапе доступен свой уникальный подарок\n\n🤍 Сердечки имеют значение – чем чаще Вы нажимаете, тем быстрее будет Ваш результат\n\n🤍 Поделитесь с любимым человеком – ведь именно Ваши касания и время создают уникальный подарок'
how_play = f'{how_play_ru}\n\n{how_play_eng}'


token_bot = '7657563739:AAHb6NI1cKeZb0j_9OYC8yGCdimQK6EN1Gg'
bot = TeleBot(token_bot)


@bot.message_handler(commands=['start'])
def start(message):
    markup = types.InlineKeyboardMarkup(row_width=1)
    webApp = types.WebAppInfo(
        "https://t.me/toncoeurbot/toncoeur")
    btn1 = types.InlineKeyboardButton(
        text='❤️ Click (начать играть)', web_app=webApp)
    btn2 = types.InlineKeyboardButton(
        text='How to play? (обучение)', callback_data='want_play')
    btn3 = types.InlineKeyboardButton(
        text='SHARE WITH FRIENDS (поделиться с друзьями)', callback_data='share')

    markup.add(btn1, btn2, btn3)

    photo = urlopen(
        'https://raw.githubusercontent.com/turbokirichenko/ton-coeur-app/refs/heads/main/app/public/logo-640x360.png')
    bot.send_photo(message.from_user.id, photo,
                   caption=hello_msg, reply_markup=markup)


@bot.callback_query_handler(func=lambda call: call.data == 'want_play')
def save_btn(call):
    message = call.message
    chat_id = message.chat.id
    markup = types.InlineKeyboardMarkup(row_width=1)
    webApp = types.WebAppInfo(
        "https://turbokirichenko.github.io/ton-coeur-app/")
    btn1 = types.InlineKeyboardButton(
        text='❤️ Click (начать играть)', web_app=webApp)
    btn2 = types.InlineKeyboardButton(
        text='SHARE WITH FRIENDS (поделиться с друзьями)', callback_data='share')

    markup.add(btn1, btn2)
    bot.send_message(chat_id, how_play, reply_markup=markup)


@bot.callback_query_handler(func=lambda call: call.data == 'share')
def save_btn(call):
    message = call.message
    chat_id = message.chat.id
    bot.send_message(chat_id, bot_link)


bot.polling(none_stop=True, interval=0)

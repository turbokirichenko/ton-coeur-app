import telebot
import urllib.request
from os import getenv

BOT_TOKEN = getenv('BOT_TOKEN')
BOT_NAME = getenv('PUBLIC_BOT_NAME')
BOT_LINK = getenv('PUBLIC_BOT_LINK')
WEBAPP_LINK = getenv('PUBLIC_WEBAPP_LINK')
WEBAPP_SHARE = getenv('PUBLIC_WEBAPP_SHARE')

src_gree_url = 'https://raw.githubusercontent.com/turbokirichenko/ton-coeur-app/refs/heads/main/app/public/logo-640x360.png'
src_play_url = 'https://raw.githubusercontent.com/turbokirichenko/ton-coeur-app/refs/heads/main/app/public/tap/heart-0.png'

# data
bot_name = BOT_NAME
bot_link = BOT_LINK
hello_msg = f"Привет это {bot_name}!\nСделай валентинку ❤️ просто тапая по экрану!\n\nHello there!\nMake a valentine card ❤️ by simply clicking on the screen!"
how_play_eng = f'How It Works?\n🤍 Tap to send – Each tap unlocks a deeper emotion.\n🤍 Hearts have meaning – The more you tap, the stronger the message.\n🤍 Share with your special one – Your taps create a unique moment between you and someone special'
how_play_ru = f'Как это работает?\n🤍 Нажмите, чтобы отправить – на каждом этапе доступен свой уникальный подарок\n🤍 Сердечки имеют значение – чем чаще Вы нажимаете, тем быстрее будет Ваш результат\n🤍 Поделитесь с любимым человеком – ведь именно Ваши касания и время создают уникальный подарок'
how_play = f'{how_play_ru}\n\n{how_play_eng}'

bot = telebot.TeleBot(BOT_TOKEN)


@bot.message_handler(commands=['start'])
def start(message):
    photo = urllib.request.urlopen(src_gree_url)
    markup = telebot.types.InlineKeyboardMarkup(row_width=1)
    webApp = telebot.types.WebAppInfo(WEBAPP_LINK)
    btn1 = telebot.types.InlineKeyboardButton(
        text='❤️ Click (начать играть)', web_app=webApp)
    btn2 = telebot.types.InlineKeyboardButton(
        text='❓ How to play? (обучение)', callback_data='want_play')
    btn3 = telebot.types.InlineKeyboardButton(
        text='🛸 SHARE WITH FRIENDS (поделиться с друзьями)', callback_data='share')
    markup.add(btn1, btn2, btn3)
    bot.send_photo(message.from_user.id, photo,
                   caption=hello_msg, reply_markup=markup)


@bot.callback_query_handler(func=lambda call: call.data == 'want_play')
def save_btn(call):
    photo = urllib.request.urlopen(src_play_url)
    message = call.message
    chat_id = message.chat.id
    markup = telebot.types.InlineKeyboardMarkup(row_width=1)
    webApp = telebot.types.WebAppInfo(WEBAPP_LINK)
    btn1 = telebot.types.InlineKeyboardButton(
        text='❤️ Click (начать играть)', web_app=webApp)
    btn3 = telebot.types.InlineKeyboardButton(
        text='🛸 SHARE WITH FRIENDS (поделиться с друзьями)', callback_data='share')
    markup.add(btn1, btn3)
    bot.send_photo(chat_id, photo, caption=how_play, reply_markup=markup)


@bot.callback_query_handler(func=lambda call: call.data == 'share')
def save_btn(call):
    message = call.message
    chat_id = message.chat.id
    bot.send_message(
        chat_id, f'🌷 There is link to app: {WEBAPP_SHARE}.\n🌻 There is link to bot: ${BOT_LINK}.\nShare with friends!')


bot.polling(none_stop=True, interval=0)

FROM python:latest

WORKDIR /usr/src/app

COPY ./bot/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "./bot/bot.py"]
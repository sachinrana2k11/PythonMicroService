FROM python:3.8-slim-buster

# Install dependencies:
COPY requirements.txt .
RUN pip install -r requirements.txt

EXPOSE 3003

COPY NewsService/NewsService.py .

# Run the application:
CMD python NewsService.py
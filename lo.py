import time
import random
import string
import pyautogui

def generate_random_sentence(length=50):
    return ''.join(random.choices(string.ascii_lowercase + ' ', k=length))

def auto_type():
    print("Place your cursor where you want to type. Typing will start in 5 seconds...")
    time.sleep(5)  # Delay before typing starts
    sentence = generate_random_sentence()
    pyautogui.write(sentence, interval=0.05)  # Type with a slight delay between keystrokes
    print("Typed sentence:", sentence)

if __name__ == "__main__":
    auto_type()
import time
import random
import string
import pyautogui

def generate_random_sentence(length=50):
    return ''.join(random.choices(string.ascii_lowercase + ' ', k=length))

def auto_type():
    print("Place your cursor where you want to type. Typing will start in 5 seconds...")
    time.sleep(5)  # Delay before typing starts
    sentence = generate_random_sentence()
    pyautogui.write(sentence, interval=0.05)  # Type with a slight delay between keystrokes
    print("Typed sentence:", sentence)

if __name__ == "__main__":
    auto_type()

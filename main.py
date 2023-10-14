import reverseprompt
from PIL import Image
import torch

print(torch.cuda.is_available())
image = Image.open(r"C:\Users\Richard Lee\Pictures\jjk.png").convert('RGB')
print(reverseprompt.image_to_tags(image))
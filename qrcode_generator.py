#Don't forget to add the library first (pip install qrcode[pil])
import qrcode
from PIL import Image

# Function to generate and save a QR code
def generate_qr_code(data, file_name):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    img.save(file_name)

# Main function
if __name__ == "__main__":
    data = input("Enter the data for the QR code: ")
    file_name = input("Enter the file name for the QR code image (e.g., my_qr_code.png): ")

    generate_qr_code(data, file_name)
    print(f"QR code saved as {file_name}")

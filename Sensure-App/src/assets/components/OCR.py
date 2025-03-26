import cv2
import torch
import easyocr
from ultralytics import YOLO

# Load YOLOv8 
model = YOLO("yolov8n.pt") 
reader = easyocr.Reader(['en'])

# Open vid
cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    # Run interface
    results = model(frame)

    for result in results:
        for box in result.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])  # box coordinates

            # extract roi
            plate_roi = frame[y1:y2, x1:x2]
            # read text on the roi
            text_results = reader.readtext(plate_roi)

            # Drawing sa box
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
            for (bbox, text, prob) in text_results:
                print(f"Detected Text: {text} | Confidence: {prob:.2f}")
                cv2.putText(frame, text, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    # Display the result
    cv2.imshow("YOLOv8 License Plate Detection", frame)

    # Press 'q' to exit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()

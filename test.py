#https://t.ly/72u8
import os
#os.environ["CUDA_VISIBLE_DEVICES"] = "-1" #手動關閉GPU
import tensorflow.keras as keras
import numpy as np
import cv2, time
#請自行修改h5檔案位置
model = keras.models.load_model('converted_keras/keras_model.h5')

# 選擇攝影機
cap = cv2.VideoCapture(0)

data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
while cap.isOpened():
    stime=time.time()
    # 從攝影機擷取一張影像
    ret, frame = cap.read() #ret=retval,frame=image
    resizeframe = cv2.resize(frame,(224,224))
    resizeframe = cv2.cvtColor(resizeframe, cv2.COLOR_BGR2RGB)  #CV2顏色BGR，其他都是RGB
    normalized_image_array = (resizeframe.astype(np.float32) / 127.0) - 1
    data[0] = normalized_image_array
    #預測結果
    prediction = model.predict(data)    
    #顯示結果，請將label內容依照次序排列
    maxindex = np.argmax(prediction)#找出機率最大的輸出
    if prediction.max()>0.5: #如果最大的機率都<0.5就當作無法判斷      
        if maxindex==0 :
            print("Scissor")
            showtext="Scissor"
        elif maxindex==1 :
            print("Paper")
            showtext="Paper"
        elif maxindex==2 :
            print("Rock")
            showtext="Rock"
        elif maxindex==3 :
            print("Background")      
            showtext="Background"
    else:
        print('Uncertain')
        showtext="Uncertain"
    print(prediction)
    etime=time.time()
    fps=round(1/(etime-stime),2)
    cv2.putText(frame, 'FPS=' + str(fps), (10, 50),  cv2.FONT_HERSHEY_SIMPLEX ,  1, (0, 0, 0), 2)
    cv2.putText(frame, showtext, (10, 90),  cv2.FONT_HERSHEY_SIMPLEX ,  1, (0, 0, 0), 2)
    cv2.imshow('frame', frame)
    key=cv2.waitKey(1)
        # 按q離開
    if key == ord('q'):
        break

# 釋放攝影機
cap.release()

# 關閉所有 OpenCV 視窗
cv2.destroyAllWindows()






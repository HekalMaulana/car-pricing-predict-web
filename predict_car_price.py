import sys
import json
import pandas as pd
import numpy as np
from joblib import load

def predict_price(input_data):
    try:
        # Convert input data to DataFrame
        df = pd.DataFrame([input_data])
        
        # Ensure correct column order
        columns = ['Location', 'Year', 'Kilometers_Driven', 'Fuel_Type', 'Transmission', 
                  'Owner_Type', 'Mileage_kmpl', 'Engine_CC', 'Power_bhp', 'Seats']
        df = df[columns]
        
        # Load the model
        model = load('models/car_price.pkl')
        
        # Make prediction
        prediction = model.predict(df)[0]
        
        # Return prediction as JSON
        print(json.dumps({'predicted_price': float(prediction)}))
        sys.stdout.flush()
        
    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.stdout.flush()

if __name__ == '__main__':
    # Read input from stdin
    input_str = sys.stdin.read()
    input_data = json.loads(input_str)
    predict_price(input_data) 
import React from "react"
import Unit from "./unit"

function fahrenheitToCelsius(f: number): number {
  return (f - 32) * (5 / 9)
}

function celsiusToFahrenheit(c: number): number {
  return c * (5 / 9) + 32
}

export default function App() {
  const [currentValF, setCurrentValF] = React.useState<string>("32")
  const [currentValC, setCurrentValC] = React.useState<string>("0")

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
    }}>
      <Unit unit="Fahrenheit" value={currentValF} onChange={(input) => {
        const value = parseFloat(input)
        setCurrentValF(input)

        if (isNaN(value)) {
          setCurrentValC("")
        } else {
          setCurrentValC(fahrenheitToCelsius(value).toString())
        }
      }} />
      <p style={{
        marginTop: 15,
      }}>=</p>
      <Unit unit="Celsius" value={currentValC} onChange={(input) => {
        const value = parseFloat(input)

        setCurrentValC(input)

        if (isNaN(value)) {
          setCurrentValF("")
        } else {
          setCurrentValF(celsiusToFahrenheit(value).toString())
        }
      }} />
    </div>
  )
}

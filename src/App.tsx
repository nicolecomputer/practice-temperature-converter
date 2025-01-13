import React from "react"
import Unit from "./unit"

function sigFigs(value: number, sigFigs: number): number {
  return Math.round(value * Math.pow(10, sigFigs)) / Math.pow(10, sigFigs)
}
function fahrenheitToCelsius(f: number): number {
  return sigFigs((f - 32) * (5 / 9), 2)
}

function celsiusToFahrenheit(c: number): number {
  return sigFigs(c * (5 / 9) + 32, 2)
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

const evaluateScript = async (lessonId, fileName) => {
  try {
    const response = await fetch("http://localhost:3000/api/evaluate-script", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lessonId, fileName),
    })
    const data = await response.json()
    const result = data

    return result
  } catch (error) {
    console.error("Error fetching script evaluation:", error)
  }
}

export default evaluateScript

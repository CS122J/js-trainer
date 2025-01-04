import { transformSync } from "esbuild"
import vm from "vm"

const evalInSandbox = async (code) => {
  // Add a default export to the code
  // code = code + "\nexport default yourSolution"

  // Transform the code from mjs to cjs using esbuild
  const result = transformSync(code, {
    format: "cjs",
    platform: "node",
  })

  const transformedCode = result.code

  // Custom console implementation
  const logs = []
  const customConsole = {
    log: (...args) => logs.push({ type: "log", message: args.join(" ") }),
    error: (...args) => logs.push({ type: "error", message: args.join(" ") }),
    warn: (...args) => logs.push({ type: "warn", message: args.join(" ") }),
    info: (...args) => logs.push({ type: "info", message: args.join(" ") }),
  }

  try {
    // Run transformed code in a sandboxed environment
    const script = new vm.Script(transformedCode)
    const context = vm.createContext({
      module: {},
      exports: {},
      console: customConsole,
    })
    script.runInContext(context)
    return { ...context.module.exports, logs }
  } catch (error) {
    console.log("Error executing code in sandbox:", error)
  }
}

export default evalInSandbox

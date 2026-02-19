import { UniverseTemplate, WorldState, Rule } from '../../shared/types';

/**
 * WorldEngine: Core logic - executes rules, manages state
 * Keep this simple. Community can extend via templates.
 */
export class WorldEngine {
  private template: UniverseTemplate;
  private state: WorldState;

  constructor(template: UniverseTemplate) {
    this.template = template;
    this.state = this.initializeState();
  }

  private initializeState(): WorldState {
    return {
      universeId: crypto.randomUUID(),
      sessionStart: new Date().toISOString(),
      player: { attributes: {}, inventory: [], location: 'origin', flags: {} },
      meta { playTime: 0, choicesCount: 0, lastSaved: new Date().toISOString() },
    };
  }

  async processAction(action: string): Promise<EngineResponse> {
    const matchingRules = this.findMatchingRules(action);
    const effects = await Promise.all(matchingRules.map(r => this.executeRule(r)));
    
    this.state.metadata.choicesCount++;
    
    return {
      narrative: await this.generateNarrative(action, effects),
      effects,
      state: { ...this.state },
      choices: this.generateChoices(),
    };
  }

  private findMatchingRules(action: string): Rule[] {
    return this.template.rules.filter(rule =>
      action.toLowerCase().includes(rule.trigger.toLowerCase())
    );
  }

  private async executeRule(rule: Rule): Promise<string> {
    // Apply effect to state
    console.log(`Executing: ${rule.effect}`);
    return rule.effect;
  }

  private async generateNarrative(action: string, effects: string[]): Promise<string> {
    // Integration with Ollama/local LLM happens here
    return `You ${action}. ${effects.join(' ')}`;
  }

  private generateChoices(): string[] {
    return ['Continue', 'Examine', 'Inventory', 'Custom...'];
  }

  getState(): WorldState {
    return { ...this.state };
  }

  exportUniverse(): string {
    return JSON.stringify({ template: this.template, state: this.state });
  }
}

interface EngineResponse {
  narrative: string;
  effects: string[];
  state: WorldState;
  choices: string[];
}

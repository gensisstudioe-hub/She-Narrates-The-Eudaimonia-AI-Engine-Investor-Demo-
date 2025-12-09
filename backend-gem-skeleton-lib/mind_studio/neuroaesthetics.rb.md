# lib/eudaimonia/mind_studio/neuroaesthetics.rb
module Eudaimonia
  module MindStudio
    module Neuroaesthetics
      
      # KPI: Cognitive Consistency Calculation
      def self.calculate_consistency(user_design, story_text)
        emotional_tone = Eudaimonia::Services::AiEngine.analyze_tone(story_text)
        visual_harmony = Eudaimonia::Services::AiEngine.analyze_visuals(user_design)
        
        # Core Algorithm for consistency
        score = (emotional_tone[:calmness] * 0.5) + (visual_harmony[:simplicity] * 0.5)
        
        return (score * 100).round(2)
      end

      def self.issue_dual_reward(consistency_score)
        return nil if consistency_score < 80
        {
          digital_asset: "generated_wallpaper_url",
          learning_unlock: "burnout_prevention_module_v1"
        }
      end
    end
  end
end
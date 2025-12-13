/**
 * Score Submission Module
 * Handles game score submission to the server
 */

class ScoreSubmission {
  constructor() {
    this.isSubmitting = false;
    this.lastGameScore = null;
  }

  /**
   * Store the last game score for submission
   */
  setLastGameScore(score, waveReached, difficulty) {
    this.lastGameScore = {
      score,
      waveReached,
      difficulty: difficulty || 'normal',
    };
  }

  /**
   * Submit score to the server
   */
  async submitScore() {
    if (this.isSubmitting || !this.lastGameScore) {
      console.warn('Cannot submit score: already submitting or no score to submit');
      return false;
    }

    this.isSubmitting = true;
    const btn = document.getElementById('btn-submit-score');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'SUBMITTING...';
    }

    try {
      // Call the tRPC API to save the score
      const response = await fetch('/api/trpc/scores.save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          json: {
            score: this.lastGameScore.score,
            waveReached: this.lastGameScore.waveReached,
            difficulty: this.lastGameScore.difficulty,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.result?.data?.success) {
        console.log('Score submitted successfully');
        if (btn) {
          btn.textContent = 'SCORE SUBMITTED!';
          btn.disabled = true;
        }
        return true;
      } else {
        throw new Error('Failed to submit score');
      }
    } catch (error) {
      console.error('Error submitting score:', error);
      if (btn) {
        btn.textContent = 'SUBMIT SCORE';
        btn.disabled = false;
      }
      alert('Failed to submit score. Please try again.');
      return false;
    } finally {
      this.isSubmitting = false;
    }
  }
}

// Create global instance
const scoreSubmission = new ScoreSubmission();

// Hook into game over event
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('btn-submit-score');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      scoreSubmission.submitScore();
    });
  }
});

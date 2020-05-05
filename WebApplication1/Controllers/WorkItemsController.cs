using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkItemsController : ControllerBase
    {
        private readonly WorkContext _context;

        public WorkItemsController(WorkContext context)
        {
            _context = context;
        }

        // GET: api/WorkItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkItem>>> GetWorkItems()
        {
            return await _context.WorkItems.ToListAsync();
        }

        // GET: api/WorkItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable< WorkItem>>> GetWorkItem(string id)
        {
            //var workItem = await _context.WorkItems.FindAsync(id);
            var workItem = await _context.WorkItems.Where(x => x.Dir == id).ToListAsync();

            if (workItem == null)
            {
                return NotFound();
            }

            return workItem;
        }

        // PUT: api/WorkItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkItem(string id, WorkItem workItem)
        {
            if (id != workItem.Dir)
            {
                return BadRequest();
            }

            _context.Entry(workItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/WorkItems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<WorkItem>> PostWorkItem(WorkItem workItem)
        {
            _context.WorkItems.Add(workItem);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (WorkItemExists(workItem.Dir))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetWorkItem", new { id = workItem.Dir }, workItem);
        }

        // DELETE: api/WorkItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<WorkItem>> DeleteWorkItem(string id)
        {
            var workItem = await _context.WorkItems.FindAsync(id);
            if (workItem == null)
            {
                return NotFound();
            }

            _context.WorkItems.Remove(workItem);
            await _context.SaveChangesAsync();

            return workItem;
        }

        private bool WorkItemExists(string id)
        {
            return _context.WorkItems.Any(e => e.Dir == id);
        }
    }
}
